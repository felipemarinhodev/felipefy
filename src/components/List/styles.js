import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 15px;
	height: 100%;
	flex: 0 0 320px;
	/* flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 320px; */

	/* Estiliza toda div que tem '+ div' */
	& + div { 
		border-left: 1px solid rgba(0, 0, 0, 0.05);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 42px;
		margin-bottom: 30px;
	}

	h2 {
		font-weight: 500;
		font-size: 16px;
		padding: 0 10px;
	}

	button {
		width: 42px;
		height: 42px;
		border-radius: 18px;
		background: #3b5bfd;
		border: 0;
		cursor: pointer;
	}
`;
