import React, { Component } from "react";
import "./FileZone.css";

class FileZone extends Component {
  // chosenWord(e) {
  //   console.log(e.target.text);
  // }
  componentDidUpdate() {
    const { chosenWeight, chosenStyle, chosenDecoration } = this.props;

    if (chosenWeight) {
      this.text.style.fontWeight = "bold";
    } else {
      this.text.style.fontWeight = "normal";
    }
    if (chosenStyle) {
      this.text.style.fontStyle = "italic";
    } else {
      this.text.style.fontStyle = "normal";
    }
    if (chosenDecoration) {
      this.text.style.textDecoration = "underline";
    } else {
      this.text.style.textDecoration = "none";
    }

    //   if (textColor === "B") {
    //     this.text.style.fontWeight = "bold";
    //   } else if (textColor === "I") {
    //     this.text.style.fontWeight = "normal";
    //     this.text.style.fontStyle = "italic";
    //   } else if (textColor === "U") {
    //     this.text.style.textDecoration = "underline";
    //     console.log("hi");
    //   }
    // } else {
    //   this.text.style.fontWeight = "normal";
    //   this.text.textDecoration = "none";
    //   this.text.style.fontStyle = "none";
    // }
  }
  render() {
    const { textColor } = this.props;
    return (
      <div id="file-zone">
        <div
          id="file"
          onClick={this.chosenWord}
          ref={textTag => {
            this.text = textTag;
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, velit
            laudantium ducimus quae ipsa illum repudiandae culpa facere tenetur,
            a earum consequuntur quas aliquam voluptatum adipisci reiciendis
            cumque nemo reprehenderit? Quos, unde veniam suscipit deserunt
            placeat atque, quasi, itaque commodi ab officia adipisci odio eum
            iusto reprehenderit laboriosam tempora cum nobis! Repellat corrupti
            atque at quisquam vel impedit fugit voluptatum. Rem magnam dolorem
            corrupti sapiente hic alias sit, unde numquam, pariatur est
            explicabo, ipsa laudantium saepe inventore aliquam itaque ipsum
            minima! Nobis a obcaecati ipsum commodi placeat at temporibus
            tempore.
          </p>
        </div>
      </div>
    );
  }
}

export default FileZone;
