import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchByName'
})

export class SearchByName implements PipeTransform {
    transform(array: any[], query: any) {
        if (query == undefined || query == "") {
            return array;
        }
        else {
            return array.filter(data => {
                if (data["name"].trim().toLowerCase().includes(query.toLowerCase()) || data["id"].trim().includes(query)) {
                    return true;
                }
                else {
                    return false;
                }
            })
        }
    }

} 