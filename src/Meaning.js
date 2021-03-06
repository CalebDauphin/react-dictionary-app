import React from "react"
import Synonyms from "./Synonyms"
import Example from "./Example"
import "./Meaning.css"

export default function Meaning(props) {
	console.log(props.meaning)
	return (
		<div className='Meaning'>
			<h3> {props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<strong>Definition: </strong>
						{definition.definition}
						<br />
						<Example example={definition.example} />
						<Synonyms synonyms={definition.synonyms} />
						<br />
					</div>
				)
			})}
		</div>
	)
}
