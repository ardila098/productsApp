import React, { useContext, useEffect, useState } from "react";
import { ContentItemsSlider, ContentItem, ContentImgItem } from "./style";
import {
  SlidersContext,
  SlidersProvider,
} from "../../../../sliders/context/SlidersContext";
import { Col } from "antd";

const CategorieSlider = () => {
  const { slidersCrud } = useContext(SlidersContext);
  const [categories, setCategories] = useState([]);
  const { sliders } = slidersCrud;

  console.log(sliders);

  const sliderCategory = categories.filter(
    (slider) => slider.name === "Verona"
  );

  useEffect(() => {
    setCategories(sliders);
  }, [sliders]);
  return (
    <>
      <SlidersProvider>
        {sliderCategory?.map((itemSlider) => {
          console.log(itemSlider);
          return (
           
              <ContentItemsSlider key={itemSlider._id}>
                {itemSlider.items.map((item) => {
                  console.log(item.imgs[0]._id);
                  return (
                    <>
                      
                        <ContentItem xs={8}>
                          <ContentImgItem
                            
                            key={item.imgs[0]._id}
                            className="image-container"
                          >
                            <img src={item.imgs[0].url} />
                          </ContentImgItem>
                        </ContentItem>
                      
                    </>
                  );
                })}
              </ContentItemsSlider>
          
          );
        })}
      </SlidersProvider>
    </>
  );
};

export default CategorieSlider;
