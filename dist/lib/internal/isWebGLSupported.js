"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebGLSupported = () => {
    const attributes = {
        alpha: false,
        antialias: false,
        depth: false,
        failIfMajorPerformanceCaveat: true,
        stencil: false,
        powerPreference: 'high-performance',
    };
    // Keep reference to the canvas and context in order to clean up
    // after the necessary information has been extracted
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl', attributes);
    if (!gl || !(gl instanceof WebGLRenderingContext)) {
        return;
    }
    return gl;
};
//# sourceMappingURL=isWebGLSupported.js.map