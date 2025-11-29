class File {
  constructor(name, extension, size) {
    this.name = name
    this.extension = extension
    this.size = size
  }

    getFileInfo(){
        return `File: ${this.name}.${this.extension}, Size: ${this.size} MB`;
    }
}

class SupportedFiles extends File {

    constructor(name, size, extension, options ={}){
        super(name, size,extension);
        this.width = options.width ?? null
        this.height = options.height ?? null
    }

    getFileInfo(){
        let base = super.getFileInfo()
        if(this.width && this.height){
            return `${base} (Dimension: ${this.width} x ${this.height})`
        }
        return base;
    }

}

class JpegFile extends File {

    constructor(name, size, extension, options ={}){
        super(name, size,extension);
        this.width = options.width ?? null
        this.height = options.height ?? null
    }

    getFileInfo(){
        let base = super.getFileInfo()
        return `${base} (Dimension: ${this.width} x ${this.height})`
    }

    getData(){
        console.log(`Downlaoded from internet @ ${Date.now()}`)
    }

}


class PdfFile extends File {

    constructor(name, size, extension){
        super(name, size,extension);
    }

    getFileInfo(){
        return super.getFileInfo()
    }

    getAuthorInfo(){
        console.log("Author not found. Might be a open pdf from Scribd.com")
    }

}


class Photoshop{
    openFile (file){
        if (file instanceof JpegFile){
            console.log(`${file.getFileInfo()} ----> Opened as flat image`)
            file.getData()
            }
            else if(file instanceof PdfFile)
            {
                console.log(`${file.getFileInfo()} ----> Opened as layer with transparent background`)
                file.getAuthorInfo()
            }
            else if(file instanceof SupportedFiles){
                console.log(`${file.getFileInfo()} ----> Opened as layer`)
            }
    }
}

let ps = new Photoshop()
let png = new SupportedFiles("logo", "png",13, {width:"120px",height:"100px"})
let pdf = new PdfFile("MCA", "pdf",23.3 )
let jp = new JpegFile("mypic", "jpg",123 ,{width:"120px",height:"100px"})

ps.openFile(jp)

ps.openFile(png)

ps.openFile(pdf)


