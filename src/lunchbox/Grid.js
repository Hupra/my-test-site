import React from "react";

const { Provider, Consumer } = React.createContext();

export const Brick = ({ w, p, children, fill, className }) => {
    if (fill) fill = { flex: `1` };
    return (
        <Consumer>
            {({ gutter, columns, border }) => (
                <div
                    style={{
                        marginRight: `${gutter}px`,
                        marginBottom: `${gutter}px`,
                        padding: `${p}px`,
                        width: `calc(${(w / columns) * 100}% - 0${gutter}px)`,
                        ...border,
                        ...fill
                    }}
                    className={className}
                >
                    {children}
                </div>
            )}
        </Consumer>
    );
};

export const Grid = ({ padding, gutter, children, columns, testing, className, id }) => {
    if (!padding) padding = 0;
    if (!gutter) gutter = 0;

    const style = {
        display: `flex`,
        flexWrap: `wrap`,
        //margin: `-${props.gutter / 2}px`,
        padding: `${padding}px`,
        paddingLeft: `${padding + gutter}px`,
        paddingTop: `${padding + gutter}px`
    };

    let border = {};
    if (testing) {
        //add border to bricks
        border = {
            border: `1px dotted black`
            //background: `whitesmoke`
        };
        //add border to grid
        style.border = `1px dotted black`;
        //style.background = `Gainsboro`;
    }

    return (
        <div style={style} className={className} id={id}>
            <Provider value={{ gutter, columns, border }}>{children}</Provider>
        </div>
    );
};
