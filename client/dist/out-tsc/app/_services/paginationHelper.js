import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PaginatedResult } from '../_models/pagination';
export function getPaginatedResult(url, params, http) {
    const paginatedResult = new PaginatedResult();
    return http.get(url, { observe: 'response', params }).pipe(map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
    }));
}
export function getPaginationHeaders(pageNumber, pageSize) {
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
}
//# sourceMappingURL=paginationHelper.js.map