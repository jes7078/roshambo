import React, { useState, useEffect } from 'react'

const HomePage = () => {
	const [ display, setDisplay ] = useState('')
	const [ computerChoice, setComputerChoice ] = useState('')
	const [ displayWinner, setDisplayWinner ] = useState('')

	const calculateComputerChoice = () => {
		const array = [ 'paper', 'rock', 'scizzors' ]
		let i = Math.floor(Math.random() * array.length)
		console.log(i)
		setComputerChoice(array[i])
	}

	// useEffect(() => {
	// 	const calculateComputerChoice = () => {
	// 		const array = [ 'paper', 'rock', 'scizzors' ]
	// 		let i = Math.floor(Math.random() * array.length)
	// 		console.log(i)
	// 		setComputerChoice(array[i])
	// 	}
	// 	calculateComputerChoice()
	// }, [])

	useEffect(
		() => {
			console.log('doing')
			console.log({ display, computerChoice })
			if (display === 'paper' && computerChoice === 'rock') {
				console.log('paper,rock')
				setDisplayWinner('You Win')
			} else if (display === 'paper' && computerChoice === 'paper') {
				console.log('paper,paper')
				setDisplayWinner('Tie')
			} else if (display === 'paper' && computerChoice === 'scizzors') {
				console.log('paper,scizzors')
				setDisplayWinner('You Lose')
			}
			if (display === 'rock' && computerChoice === 'rock') {
				console.log('paper,rock')
				setDisplayWinner('Tie')
			} else if (display === 'rock' && computerChoice === 'paper') {
				console.log('paper,paper')
				setDisplayWinner('You Lose')
			} else if (display === 'rock' && computerChoice === 'scizzors') {
				console.log('paper,scizzors')
				setDisplayWinner('You Win')
			}
			if (display === 'scizzors' && computerChoice === 'rock') {
				console.log('paper,rock')
				setDisplayWinner('You Lose')
			} else if (display === 'scizzors' && computerChoice === 'paper') {
				console.log('paper,paper')
				setDisplayWinner('You Win')
			} else if (display === 'scizzors' && computerChoice === 'scizzors') {
				console.log('paper,scizzors')
				setDisplayWinner('Tie')
			}
		},
		[ display ]
	)

	const displayitem = (itemChosen) => {
		setDisplay(itemChosen)
		calculateComputerChoice()
	}

	const clear = () => {
		setDisplay('')
		setComputerChoice('')
		setDisplayWinner('')
	}

	return (
		<main>
			<section className="all">
				<section className="top">
					<h1>Paper Rocks Scissors</h1>
				</section>
				<section className="buttons">
					<ul>
						<li>
							<button onClick={() => displayitem('paper')}>Paper</button>
						</li>
						<li>
							<button onClick={() => displayitem('rock')}>Rock</button>
						</li>
						<li>
							<button onClick={() => displayitem('scizzors')}>Scizzors</button>
						</li>
					</ul>
				</section>
				<section>
					<section className="bottom">
						<h1>Player 1: {display}</h1>
						<h1>Computer: {computerChoice}</h1>
						<h1>Outcome: {displayWinner}</h1>
						<ul>
							<li>
								<button id="playAgain" onClick={() => clear()}>
									Play Again
								</button>
							</li>
						</ul>
					</section>
				</section>
			</section>
		</main>
	)
}

export default HomePage
