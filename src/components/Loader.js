/**
 * Created by mambig on 6/13/2016.
 */
import React, { Component } from 'react';


const Loader=(props)=>{
    "use strict";
    return (
        <section className="pageLoader">
            <div className="loader">
                <div className="ldr">
                    <div className="ldr-blk"></div>
                    <div className="ldr-blk an_delay"></div>
                    <div className="ldr-blk an_delay"></div>
                    <div className="ldr-blk"></div>
                </div>
            </div>
        </section>

    );

};

export default Loader;
