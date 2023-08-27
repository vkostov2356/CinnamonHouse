/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Swal from "sweetalert2";

export default class Sweetalertdemo extends Component {
  // constructor() {
  //   super();
  //   this.HandleClick = this.HandleClick.bind(this);
  // }

  HandleClickSucess() {
    Swal.fire({
      title: "Success",
      type: "success",
      text: "Your work has been saved.",
    });
  }
  HandleClickQuestion() {
    Swal.fire({
      title: "Are you sure?",
      text: "User will have Admin Privileges",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    });
  }
  HandleClickError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<a href>Why do I have this issue?</a>",
    });
  }
  HandleClicktopFast() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  HandleClickAutoclose() {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

  // render() {
  //   return (
  //     <div>
  //       <div className="hdr">
  //         <div>SweetAlert2 In React</div>
  //       </div>
  //       <div style={{ paddingTop: "10px" }}>
  //         <button onClick={this.HandleClick}>Success</button>
  //         <button onClick={this.HandleClick1}>Confirm</button>
  //         <button onClick={this.HandleClick12}>Confirm Box</button>
  //         <button onClick={this.HandleClicktop}>Top Side</button>
  //         <button onClick={this.HandleClickAutoclose}>Auto Close</button>
  //       </div>
  //     </div>
  //   );
  // }
}
