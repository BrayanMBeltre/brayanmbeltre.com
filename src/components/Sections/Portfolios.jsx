import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Portal",
  },
  {
    id: 3,
    name: "Backoffice",
  },
];

const allData = [
  {
    id: 1,
    name: "www.gob.do",
    category: ["portal"],
    image: "images/portfolio/portal-gob-do.png",
    slug: "gob-do",
  },
  {
    id: 2,
    name: "Beca tu futuro",
    category: ["portal"],
    image: "images/portfolio/portal-becas.png",
    slug: "beca-tu-futuro",
  },
  {
    id: 3,
    name: "Datos abiertos",
    category: ["portal"],
    image: "images/portfolio/datos-abiertos.png",
    slug: "datos-abiertos",
  },
  {
    id: 4,
    name: "E-Ticket",
    category: ["portal"],
    image: "images/portfolio/portal-e-ticket.png",
    slug: "e-ticket",
  },
  {
    id: 5,
    name: "Dominican Desing System",
    category: ["portal"],
    image: "images/portfolio/ssd.png",
    slug: "ssd",
  },
  {
    id: 6,
    name: "InfraSecurityCode",
    category: ["portal"],
    image: "images/portfolio/infrasecuritycode.png",
    slug: "infrasecuritycode",
  },
  {
    id: 7,
    name: "Backoffice www.gob.do",
    category: ["backoffice"],
    image: "images/portfolio/backoffice-gob-do.png",
    slug: "backoffice-gob-do",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (filter) => {
    setActiveFilter(filter.toLowerCase());
    let tempData;

    if (filter.toLowerCase() === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
      console.log(dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return data.category.includes(filter.toLowerCase());
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = () => {
    let tempCount = dataVisibleCount + dataIncrement;

    setDataVisibleCount(tempCount);

    if (activeFilter === filters[0].name.toLowerCase()) {
      setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
    } else {
      let items = getAllItems.filter((data) => {
        return data.category.includes(activeFilter) && data.id <= tempCount;
      });
      setVisibleItems(items);
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={() => handleChange(filter.name)}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      {/* <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div> */}

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {getAllItems.length > dataVisibleCount && (
        <div className="load-more text-center mt-4">
          <button
            type="button"
            className="btn btn-default"
            onClick={() => handleLoadmore()}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </button>
        </div>
      )}
    </>
  );
}

export default Portfolios;
