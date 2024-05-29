import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({text}) => {
    return (
        <button> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        {text}
        </button>
    )
}

root.render(
    <App />
);