public class Photoshop {
    
    void openFile(File f){
        
    }

    public static void main(String[] args) {
        Photoshop p = new Photoshop();
        File f = new File(123,"Muthu","");
        p.openFile(f);
    }
}

class File{
    int filesize;
    String filename;
    String extension;

    File(int filesize, String filename, String extension){
        this.filesize = filesize;
        this.filename = filename;
        this.extension = extension;
    }

    void getDetails(){
        System.out.println(this.filename+"."+this.extension);
        System.out.println("File Size:" + this.filesize + " MB");
    }
}

class JpegFile extends File{
    JpegFile(int filesize, String filename, String extension){
        super(filesize, filename, extension);
    }
}