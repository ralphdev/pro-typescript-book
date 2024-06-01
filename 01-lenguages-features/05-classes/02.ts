//* Manually mapped constructor parameters

class Sonidos {

  private artist: string;
  private title: string;

   constructor(artist: string, title: string) {

     //* Don't do this!
    this.artist = artist;
    this.title = title;
  }

   play() {
    console.log('Playing ' + this.title + ' by ' + this.artist);
  }
}
