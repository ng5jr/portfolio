import { keyframes } from "styled-components";
export const showImage = keyframes`
	0%{
		opacity: 0;
		transform: translateY(3rem);
	}
	100%{
		opacity: 1;
		transform: translateY(0);
	}
`;

export const showSwiperProjects = keyframes`
		from{
		opacity: 0;
	}
	to{
		opacity: 1;
	}
`;

export const showDescProject = keyframes`
	from{
		transform: translateY(110%);
	}
		to{
		transform: translateY(0);
	}

`;

export const grow = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

export const bounce = keyframes`
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}

`;
