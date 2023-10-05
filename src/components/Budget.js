import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        const enteredBudget = event.target.value;

        // Validate the entered value
        if (enteredBudget > 20000) {
        setNewBudget(20000); // Set to the maximum value (20,000)
        } else {
        setNewBudget(enteredBudget);
        }
    };


    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
