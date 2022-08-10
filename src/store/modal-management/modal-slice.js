import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModalVisible: false,
  modalName: "",
  modalData: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalVisible = true;
      state.modalName = action.payload;
    },
    closeModal: (state) => {
      state.isModalVisible = false;
      state.modalName = "";
    },
    setModalData: (state, action) => {
      state.modalData = action.payload.data;
    },
  },
});

export const { openModal, closeModal, setModalData } = modalSlice.actions;

export default modalSlice.reducer;
