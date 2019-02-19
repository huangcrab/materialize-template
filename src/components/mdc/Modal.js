import React, { Component } from "react";

export default class Modal extends Component {
  onModalClick = () => {};
  render() {
    return (
      <div className="container">
        <a
          href="#modal1"
          className="btn waves-light waves-effect cyan modal-trigger"
        >
          Modal1
        </a>

        <a
          href="#modal2"
          className="btn waves-light waves-effect cyan modal-trigger"
        >
          Modal2
        </a>

        <a
          href="#modal3"
          className="btn waves-light waves-effect cyan modal-trigger"
        >
          Modal3
        </a>

        <div className="modal" id="modal1">
          <div className="modal-content">
            <h4>Modal Headr</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
              similique!
            </p>
          </div>

          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              OK
            </a>
          </div>
        </div>

        <div className="modal modal-fixed-footer" id="modal2">
          <div className="modal-content">
            <h4>Modal Headr</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dolore placeat nam iure cupiditate. Odio ipsam, repellendus
              officia exercitationem eaque ea ratione a molestias ullam
              distinctio, qui commodi! Fugit, illo. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sapiente assumenda ex et magni
              maiores, eveniet quibusdam, molestiae, vitae explicabo deserunt
              iusto suscipit aliquam dignissimos illo sit rerum dolorem. Neque
              dolorem odit blanditiis rem enim deserunt quas distinctio numquam
              est qui dolor, alias explicabo cum facere reprehenderit corporis,
              at velit temporibus. Beatae tempore expedita quibusdam neque
              eligendi reprehenderit veritatis ipsum ipsam accusamus
              praesentium? Illum quae amet provident illo quaerat deleniti
              asperiores ipsum necessitatibus atque a minima commodi ea placeat
              animi sit, labore culpa facilis nesciunt earum quasi, voluptate,
              tempora fugit voluptates. Incidunt molestias facere suscipit autem
              sapiente. Inventore illo totam iusto eos esse expedita molestias
              dicta, itaque consequatur deleniti reprehenderit. Inventore,
              accusamus voluptatum iste voluptates sunt nostrum animi
              perferendis qui cupiditate corrupti enim ad ut quis voluptas
              aperiam recusandae fuga, quod officiis id laudantium illum soluta
              culpa molestiae maxime! Facilis alias quae ea impedit excepturi
              odit at atque aliquid quasi enim, rem dolorum possimus voluptatem
              provident suscipit, corrupti, ab veniam asperiores aliquam non
              nihil repellendus. Consectetur pariatur illum facilis at error
              unde aspernatur, ipsam ea tempore incidunt repellendus molestias
              quisquam. At eius eligendi ex neque, repellendus minus architecto
              hic magnam fugiat porro dolorem maiores in omnis illum, non
              assumenda laboriosam consequuntur?
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Cancel
            </a>
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              OK
            </a>
          </div>
        </div>

        <div className="modal bottom-sheet" id="modal3">
          <div className="modal-content">
            <h4>Modal Headr</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dolore placeat nam iure cupiditate. Odio ipsam, repellendus
              officia exercitationem eaque ea ratione a molestias ullam
              distinctio, qui commodi! Fugit, illo. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sapiente assumenda ex et magni
              maiores, eveniet quibusdam, molestiae, vitae explicabo deserunt
              iusto suscipit aliquam dignissimos illo sit rerum dolorem. Neque
              dolorem odit blanditiis rem enim deserunt quas distinctio numquam
              est qui dolor, alias explicabo cum facere reprehenderit corporis,
              at velit temporibus. Beatae tempore expedita quibusdam neque
              eligendi reprehenderit veritatis ipsum ipsam accusamus
              praesentium? Illum quae amet provident illo quaerat deleniti
              asperiores ipsum necessitatibus atque a minima commodi ea placeat
              animi sit, labore culpa facilis nesciunt earum quasi, voluptate,
              tempora fugit voluptates. Incidunt molestias facere suscipit autem
              sapiente. Inventore illo totam iusto eos esse expedita molestias
              dicta, itaque consequatur deleniti reprehenderit. Inventore,
              accusamus voluptatum iste voluptates sunt nostrum animi
              perferendis qui cupiditate corrupti enim ad ut quis voluptas
              aperiam recusandae fuga, quod officiis id laudantium illum soluta
              culpa molestiae maxime! Facilis alias quae ea impedit excepturi
              odit at atque aliquid quasi enim, rem dolorum possimus voluptatem
              provident suscipit, corrupti, ab veniam asperiores aliquam non
              nihil repellendus. Consectetur pariatur illum facilis at error
              unde aspernatur, ipsam ea tempore incidunt repellendus molestias
              quisquam. At eius eligendi ex neque, repellendus minus architecto
              hic magnam fugiat porro dolorem maiores in omnis illum, non
              assumenda laboriosam consequuntur?
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Cancel
            </a>
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              OK
            </a>
          </div>
        </div>
      </div>
    );
  }
}
