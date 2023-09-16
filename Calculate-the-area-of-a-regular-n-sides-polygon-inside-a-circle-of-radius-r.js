function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    const area = (1/2) * numberOfSides * Math.pow(circleRadius, 2) * Math.sin((2 * Math.PI) / numberOfSides);
    return area
        .toFixed(3);

}
