import PropType from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCarousel } from "react-use-carousel-hook";
import "react-use-carousel-hook/dist/index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useState } from "react";
import {
  ContainerItemCarousel,
  ContainerItemsSearch,
  TextOff,
  TextPrice,
} from "./style";
import ButtonAddToCart from "../buttonsCustom/ButtonAddToCart";
import { ProductsContext } from "../products/context/ProductsContext";

const CarouselCustom = ({ items, onClose }) => {
  const { ref } = useCarousel();
  const Navigate = useNavigate();
  const { shoppingCart } = useContext(ProductsContext);
  const { onAddToCart } = shoppingCart;
  const [searchItems, setSearchItems] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: searchItems.length < 3 ? searchItems.length : 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const off = 120000;

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    setSearchItems(items);
  }, [items]);

  const redirectToProductDetails = (productId) => {
    onClose();
    Navigate(`/product/${productId}`);
  };

  return (
    <>
      {searchItems.length > 0 ? (
        <ContainerItemsSearch>
          <Slider {...settings} ref={ref}>
            {searchItems?.map((item) => (
              <ContainerItemCarousel key={item._id} className="carousel__item">
                <img
                  style={{ width: "22rem", height: "18rem" }}
                  src={item.imgs[0].url}
                  alt={item.description}
                  onClick={() => redirectToProductDetails(item._id)}
                />
                <div>
                  <span>{item.name}</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <TextPrice>
                    ${item.price.toLocaleString("es-CO")} COP
                  </TextPrice>
                  <TextOff>${off.toLocaleString("es-CO")} COP</TextOff>
                </div>

                <ButtonAddToCart
                  onChange={() => onAddToCart({ ...item, quantity: 1 })}
                />
              </ContainerItemCarousel>
            ))}
          </Slider>
        </ContainerItemsSearch>
      ) : null}
    </>
  );
};

export default CarouselCustom;

CarouselCustom.propType = {
  items: PropType.array,
  onClose: PropType.func,
};
