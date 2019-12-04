import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
	const [ display, setDisplay ] = useState('')
	const [ computerChoice, setComputerChoice ] = useState('')
	const [ displayWinner, setDisplayWinner ] = useState('')
	const [ coin, setCoin ] = useState('')
	const [ count, setCount ] = useState(0)

	const calculateComputerChoice = () => {
		const array = [ 'paper', 'rock', 'scizzors' ]
		let i = Math.floor(Math.random() * array.length)
		console.log(i)
		setComputerChoice(array[i])
	}

	const getDataFromApi = async () => {
		const resp = await axios.get(`https://api.coinmarketcap.com/v2/ticker/?limit=20`)
		console.log(resp.data.data[1].name)
		console.log(resp.data.data[1].quotes.USD.price)
		setCoin(resp.data.data[1].quotes.USD.price)
	}

	useEffect(
		() => {
			getDataFromApi()
		},
		[ setInterval(60000) ]
	)

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
				<section>
					<h1 id="bitcoin">bitcoin value is: {coin}</h1>
				</section>
			</section>
		</main>
	)
}

export default HomePage
