import React from "react";
import Card from "react-bootstrap/Card";
import { images } from "../utilis";

const Cards = () => {
  return (
    <>
      <div className="containerCards row">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "black",
          }}
        >
          <h3>OUR CREATIONS</h3>
          <button>SEE ALL</button>
        </div>

        {images.map((item, index) => (
          <div className="col-sm-12 col-md-4 col-lg-3 cardImg" key={index}>
            <Card className="text-white" style={{ border: "none", borderRadius: "0px" }}>
              {/* Etiqueta <picture> para cargar diferentes imágenes según el tamaño de la pantalla */}
              <picture>
                {/* Imagen WebP para pantallas pequeñas */}
                <source
                  type="image/webp"
                  media="(max-width: 768px)"
                  srcSet={item.imgM}
                />
                {/* Imagen JPEG para pantallas grandes */}
                <source
                  type="image/jpeg"
                  media="(min-width: 769px)"
                  srcSet={item.imgD}
                />
                {/* Fallback para navegadores antiguos */}
                <img
                  src={item.imgD}
                  alt={item.text}
                  style={{ borderRadius: "0px", width: "100%" }}
                />
              </picture>

              <Card.ImgOverlay style={{ display: "flex", alignItems: "flex-end" }}>
                <Card.Title>{item.text}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
