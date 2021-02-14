import React from "react";
import _ from "lodash";
import { LoremPicsum } from "react-lorem-picsum";
import { iframeResizer } from "iframe-resizer";
import "./IFrameDemo.scss";

const IFrameDemo = () => {
  iframeResizer({ log: true, checkOrigin: false }, "#myIframe");

  return (
    <>
      <div className="iframe-demo">
        <div className="lorem-picsum">
          {_.times(20, (i) => (
            <LoremPicsum
              key={i}
              width={500}
              height={500}
              id={_.random(i * 100, false)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IFrameDemo;
