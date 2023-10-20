import { createReducer } from "@reduxjs/toolkit";

export const ReduxReducer = createReducer(
	{},
	{
		DATA_REQUEST: (state) => {},
		TICKET_SUCCESS: (state, action) => {
			state.ticketData = action.payload.tickets;
			state.allUser = action.payload.users;
		},
		TICKET_FAILURE: (state) => {
			state.ticketData = [];
			state.allUser = [];
		}
	}
);

export const chooseDataReducer = createReducer(
	{},
	{
		SELECT_DATA_REQUEST: (state) => {
			state.groupedData = [];
		},
		CHOOSE_TICKET_SUCCESS: (state, action) => {
			state.groupedData = action.payload.groupedData;
			state.user = action.payload.user;
		},
		CHOOSE_TICKET_FAILURE: (state, action) => {
			state.groupedData = [];
			state.message = action.payload.message;
		}
	}
);
