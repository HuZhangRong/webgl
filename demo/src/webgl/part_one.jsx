import { useEffect, useRef } from "react"

const Changefangxin = () => {
    const canvas = useRef(null)
    useEffect(() => {
        if (canvas.current) {
            var gl = canvas.current.getContext("webgl");
            if (!gl) {
                return;
            }

            // 告诉WebGL怎样把提供的gl_Position裁剪空间坐标对应到画布像素坐标（屏幕空间）
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            // 清空画布
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

    }, [])
    return <div ref={canvas}>111</div>
}
export default Changefangxin