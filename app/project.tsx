import internal from "stream";

export class Project {
    id: number;
    title: string;
    url: string;
    imgUrl?: string;
    description: string;
    time: string;

    constructor(
        id: number,
        url: string,
        title: string,
        description: string,
        time: string,
        imgUrl?: string,
        ) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.imgUrl = imgUrl;
        this.description = description;
        this.time = time;
    }


}

export class ProjectBuilder {
    _id: number = -1;
    _url: string = "";
    _title: string = "";
    _imgUrl?: string;
    _description: string = "";
    _time: string = "";

    constructor() {

    }

    id(id: number) : ProjectBuilder {
        this._id = id;
        return this;
    }
    url(url: string) : ProjectBuilder {
        this._url = url;
        return this;
    }
    title(title: string) : ProjectBuilder {
        this._title = title;
        return this;
    }
    imgUrl(imgUrl: string) : ProjectBuilder {
        this._imgUrl = imgUrl;
        return this;
    }
    description(description: string) : ProjectBuilder {
        this._description = description;
        return this;
    }
    time(time: string) : ProjectBuilder {
        this._time = time;
        return this;
    }

    build() : Project {
        return new Project(
            this._id,
            this._url,
            this._title,
            this._description,
            this._time,
            this._imgUrl
        )
    }
}

