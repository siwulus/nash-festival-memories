import PhotoCollection from '@/app/components/photo-collection';
import { FC } from 'react';

const PhotoCollectionPage: FC = () => {
  return (
    <div>
      <h1>NASH Festival - Górskie Wydarzenie Kulturalne</h1>
      <h2>NASH Sokół</h2>
      <p>Opis inicjatywy co i jak - TODO: Rutek</p>
      <p>
        Aby wysłać swoje zdjęcia, wypelnij poniższy formularz. Po wypełenieniu i
        wysłaniu formularza, wyświetli Ci sie link do Dropboxa gdzie bedziesz
        mógł je przesłać.
      </p>
      <p>
        Wygenerowany link jest ważny przez 24 godziny. Po tym czasie zostanie
        automatycznie usunięty.
      </p>
      <p>
        Ten link jest utworzony tylko dla Ciebie i nikt inny nie ma do niego
        dostępu ani do zdjęć przez Ciebie przesłanych
      </p>
      <PhotoCollection />
    </div>
  );
};

export default PhotoCollectionPage;
