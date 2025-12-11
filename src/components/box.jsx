import React from "react";

function Box({name='', content = ''}) {


    return <div className="box">
        <img src={`${import.meta.env.BASE_URL}/assets/thumbnails/Class Icon - ${name}.svg`} alt={name} />
        <p>{name}</p>
    </div>
}

export default Box;