import React from 'react'
import './infomore2.css'
import styled from 'styled-components'

function FrequentlyAskedQuestion4({ question, answer }) {
	return (
		<Faq>
			<Summary>{question}</Summary>
			<Answer>{answer}</Answer>
		</Faq>
	)
}

const Faq = styled.details`
	font-size: 1.3rem;
	color: hsl(0deg 0% 100%);
	margin: 20px;
	border: 2px solid;
	background: var(--color-blog);
	border-radius: 4px;
	overflow: hidden;
	font-family: var(--font-family);
`

const Summary = styled.summary`
	cursor: pointer;
	padding: 12px 16px;
	outline-offset: 5px;
`

const Answer = styled.div`
	background: var(--color-blog);
	border-radius: 0 0 4px 4px;
	padding: 12px 17px;
`

export default FrequentlyAskedQuestion4
