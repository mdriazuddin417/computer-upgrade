import React from "react";

const ConfirmModel = ({ handleDeleteProduct }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            {" "}
            Delete this Product. Are you sure ?
          </h3>
          <div class="modal-action">
            <label for="my-modal" class="btn" onClick={handleDeleteProduct}>
              Yes
            </label>
            <label for="my-modal" class="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModel;
