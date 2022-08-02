import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModalVisible: false,
  modalName: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalVisible = true;
      state.modalName = action.payload;
      //   state.value += 1;
    },
    closeModal: (state) => {
      //   state.value -= 1;
      state.isModalVisible = false;
      state.modalName = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
