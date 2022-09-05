function Cart() {
    const administrateur = "Administrator";
    const newMember = "New member";
    const rh = "RH";
    return (
     <div className="block-cart">
        <h2>Membre</h2>
        <ul className='cart-li'>
            <li>Lucas ({administrateur})</li>
            <li>Djibril ({newMember})</li>
            <li>Allison ({rh})</li>
        </ul>
        <p>Total Membre = 3</p>
    </div>
    )
}

export default Cart