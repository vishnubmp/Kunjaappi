using AutoMapper;
using DatingApp.DTOs;
using DatingApp.Entities;
using DatingApp.Extensions;
using DatingApp.Helpers;
using DatingApp.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Controllers
{
    [Authorize]
    public class MessagesController : BaseApiController
    {

        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public MessagesController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MessageDto>>> GetMessagesForUser([FromQuery]
        MessageParams messageParams)
        {
            messageParams.Username = User.GetUsername();
            var message = await _unitOfWork.MessageRepository.GetMessageForUser(messageParams);
            Response.AddPaginationHeader(message.CurrentPage, message.PageSize,
                message.TotalCount, message.TotalPages);
            return message;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteMessage(int id)
        {
            var username = User.GetUsername();
            var message = await _unitOfWork.MessageRepository.GetMessage(id);
            if (message.Sender.UserName != username && message.Recipient.UserName !=username)
            {
                return Unauthorized();
            }

            if (message.Sender.UserName == username)
            {
                message.SenderDeleted = true;
            }

            if (message.Recipient.UserName == username)
            {
                message.RecipientDeleted = true;
            }

            if (message.SenderDeleted && message.RecipientDeleted)
            {
                _unitOfWork.MessageRepository.DeleteMessage(message);
            }

            if (await _unitOfWork.Complete())
            {
                return Ok();
            }

            return BadRequest("Problem deleting message");
        }
    }
}
