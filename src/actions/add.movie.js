export const SET_MOVIE = '[MOVIE] Add';
export const OPEN_CLOSE = '[Button] Visibility';
export const CHANGE_PAGE = '[Paging] Change page';

export class Actions {
    static addMovie(title,url,plot) {
        return {
            type: SET_MOVIE,
            title,
            url,
            plot
        }
    }
    static showClose(str){
        return{
            type: OPEN_CLOSE,
            str
        }
    }
    static changePage(number){
        return{
            type: CHANGE_PAGE,
            number
        }
    }
    static updateCur(number){
        return{
            type: "curchange",
            number
        }
    }
}