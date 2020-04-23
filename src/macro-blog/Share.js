// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125px;

  svg {
    width: 32.5px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default function Share({ page }) {
  return (
    <Flex>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://rogierovervliet.nl/${page}&title=${page}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2877 2877">
          <g id="Group_4" data-name="Group 4" transform="translate(3900 2769)">
            <circle
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="1438.5"
              cy="1438.5"
              r="1438.5"
              transform="translate(-3900 -2769)"
              fill="#424288"
            />
            <path
              id="Icon_awesome-linkedin-in"
              data-name="Icon awesome-linkedin-in"
              d="M301.847,1348.471H22.274v-900.3H301.847ZM161.91,325.356C72.512,325.356,0,251.309,0,161.911a161.91,161.91,0,1,1,323.821,0C323.821,251.309,251.279,325.356,161.91,325.356ZM1348.2,1348.471H1069.228V910.208c0-104.449-2.107-238.4-145.355-238.4-145.355,0-167.629,113.479-167.629,230.87v445.788H476.972v-900.3H745.106v122.81h3.913c37.325-70.736,128.5-145.385,264.523-145.385,282.944,0,334.958,186.322,334.958,428.329v494.55Z"
              transform="translate(-3122.5 -2123.501)"
              fill="#fff"
            />
          </g>
        </svg>
      </a>
      <a
        href={`whatsapp://send?text=https://rogierovervliet.nl/${page}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2877 2877">
          <g id="Group_6" data-name="Group 6" transform="translate(-3291 2769)">
            <circle
              id="Ellipse_9"
              data-name="Ellipse 9"
              cx="1438.5"
              cy="1438.5"
              r="1438.5"
              transform="translate(3291 -2769)"
              fill="#424288"
            />
            <path
              id="Icon_awesome-whatsapp"
              data-name="Icon awesome-whatsapp"
              d="M1499.673,258.561C1334.7,93.2,1115.01,2.25,881.535,2.25,399.624,2.25,7.481,394.393,7.481,876.3a874.994,874.994,0,0,0,116.541,437.027L0,1766.108l463.406-121.659a871.4,871.4,0,0,0,417.735,106.3h.394c481.517,0,882.322-392.143,882.322-874.055,0-233.475-99.217-452.776-264.185-618.138ZM881.535,1603.5a725.2,725.2,0,0,1-370.1-101.186l-26.379-15.749-274.815,72.051L283.477,1290.5l-17.324-27.56C193.316,1147.183,155.125,1013.712,155.125,876.3c0-400.412,326-726.41,726.8-726.41,194.1,0,376.395,75.594,513.409,213s221.27,319.7,220.876,513.8c0,400.8-334.267,726.8-734.678,726.8Zm398.443-544.119c-21.654-11.024-129.14-63.782-149.219-70.869-20.079-7.481-34.647-11.024-49.215,11.024s-56.3,70.869-69.294,85.831c-12.6,14.568-25.592,16.536-47.246,5.512C836.651,1026.7,752.4,976.309,667.746,831.027c-22.442-38.584,22.442-35.828,64.176-119.3,7.087-14.568,3.543-27.167-1.969-38.191s-49.215-118.509-67.326-162.212c-17.717-42.522-35.828-36.616-49.215-37.4-12.6-.787-27.167-.787-41.734-.787s-38.191,5.512-58.27,27.167c-20.08,22.048-76.381,74.807-76.381,182.292s78.35,211.427,88.98,225.994c11.024,14.568,153.944,235.05,373.245,329.936,138.589,59.845,192.922,64.963,262.216,54.727,42.128-6.3,129.14-52.758,147.251-103.942s18.111-94.886,12.6-103.942C1316.2,1075.526,1301.633,1070.014,1279.978,1059.384Z"
              transform="translate(3858.315 -2254.323)"
              fill="#fff"
            />
          </g>
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=rogierovervliet.nl/${page}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2877 2877">
          <g id="Group_5" data-name="Group 5" transform="translate(125 2769)">
            <circle
              id="Ellipse_8"
              data-name="Ellipse 8"
              cx="1438.5"
              cy="1438.5"
              r="1438.5"
              transform="translate(-125 -2769)"
              fill="#424288"
            />
            <path
              id="Icon_awesome-facebook-f"
              data-name="Icon awesome-facebook-f"
              d="M844.36,947.17l46.767-304.739H598.721V444.677c0-83.371,40.847-164.637,171.806-164.637H903.46V20.588S782.827,0,667.49,0c-240.8,0-398.206,145.956-398.206,410.177V642.431H1.609V947.17H269.284v736.688H598.721V947.17Z"
              transform="translate(861.064 -2172.072)"
              fill="#fff"
            />
          </g>
        </svg>
      </a>
    </Flex>
  );
}
