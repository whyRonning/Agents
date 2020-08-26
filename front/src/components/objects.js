import React from "react";
import { ObjectContainer } from "./Object-components/Object-container";
import { FilterContainer } from "./Object-components/filterContainer";
import { FilterMobileContainer } from "./Object-components/FilterMobileContainer";
export const Objects = props => {
  return (
    <section className="objectsSite">
      <button
        onClick={props.ChangeFilterVisibleAC}
        className="buttonFilterMobile"
      >
        Фильтры
      </button>
      <FilterMobileContainer />
      <FilterContainer />
      <ObjectContainer />
    </section>
  );
};
