// Importa todas as imagens da pasta galeria
const imageModules = import.meta.glob('../images/galeria/*');
import { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    // Carrega todas as imagens quando o componente montar
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.entries(imageModules).map(async ([path, loader]) => {
          const mod = await loader();
          return {
            src: (mod as { default: string }).default,
            alt: path.split('/').pop().split('.')[0] // pega o nome do arquivo como alt
          };
        })
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  // Divide as imagens em 4 colunas
  const columns = [[], [], [], []];
  images.forEach((image, index) => {
    columns[index % 4].push(image);
  });

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:px-12 px-4">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {column.map((image, imageIndex) => (
            <div key={`${columnIndex}-${imageIndex}`}>
              <img
                className="h-full max-w-full rounded-lg object-cover object-center"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;