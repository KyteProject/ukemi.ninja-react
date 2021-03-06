import React, { Component } from 'react';
import Typed from 'react-typed';

const options = {
	strings: [
		'<span class="palet-blue">Design.</span>',
		'<span class="palet-red">Events.</span>',
		'<span class="palet-orange">Games.</span>',
		'<span class="palet-green">Parks.</span>',
	],
	typeSpeed: 60,
	backSpeed: 30,
	backDelay: 1000,
	loop: true,
	contentType: 'html',
	showCursor: true,
	cursorChar: '|',
};

export default class SubHeader extends Component {
	render() {
		return (
			<div className="section pt-12 pb-12">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="text-center">
								<h2 className="section-title dark pt-3 mb-2 title-line">
									<span>
										We are <b>UKEMI</b>
									</span>
								</h2>
								<div className="heli-typed-words mt-4">
									A creative studio focused on movement <Typed {...options} />
									<div className="dh-typed-text-wrap" />
									<p className="pt-2">
										We work towards reclaiming urban environments as places for creativity and play.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
