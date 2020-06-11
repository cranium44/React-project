import React from "react";
import ItemInfoCard from '../ItemInfoCard/ItemInfoCard'
import "./FourColGrid.css";
const FourColGrid = (props) => {
  console.log(props);
	const renderElements = () => {
		const gridElements = props.item.map((child, index) => {
			return (
				<div key={index} className="rmdb-grid-element">
					<ItemInfoCard child  key={index}/>
				</div>
			);
		});
		return gridElements;
	};

	return (
		<div className="rmdb-grid">
			<div className="rmdb-grid-content">{renderElements()}</div>
		</div>
	);
};

FourColGrid.defaultProps = {
	item: [...Array(8).fill({
    hot: true,
    product: "Apple Macbook Pro",
    oldPrice: 699,
    newPrice: 499
})]}

export default FourColGrid;
