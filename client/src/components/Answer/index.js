import React, { useEffect, useRef, useState } from 'react';
import './style.css'

const Answer = ({ word }) => {


    return (
        <button className="border mx-auto px-4 py-1 rounded-full bg-purple-500 text-white"> {word}</button>

    );
}

export default Answer;
