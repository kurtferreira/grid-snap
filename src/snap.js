let snap = function (point, spacing) {
    if (typeof point === 'undefined') return 0;
    if (typeof spacing === 'undefined' || spacing === 0) return point;

    let getPoint = function (p,u) {
        const mod = (p % u);
        const central = mod / u;
        return (central > 0.5) ? p + (u - mod) : p - mod;
    };

    // multidimensional
    if (typeof point === 'object') {
        if (Object.keys(point).length !== Object.keys(spacing).length) return point;

        let points = point;

        Object.keys(point).forEach(row => points[row] = getPoint(points[row], spacing[row]));

        return points;
    } 
    
    // unidimensional
    return getPoint(point, spacing);    
};

if(typeof module !== 'undefined' && module.exports)
    module.exports = snap;
else window.snap = snap;