import { Injectable } from "@nestjs/common";

@Injectable()
export class DateUtils {
    public formatDate(date: Date): string {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hour = date.getHours().toString().padStart(2,'0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}-${month}-${year} à ${hour}:${minutes}`;
    }
}