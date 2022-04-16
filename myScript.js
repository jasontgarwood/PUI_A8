import Fluid from 'fluid';

fluid.mapBehaviors({
    sim_resolution: 128,
    dye_resolution: 512,

    paused: false,
    embedded_dither: true,

    dissipation: .97,
    velocity: .98,
    pressure: 1,
    pressure_iteration: 20,
    curl: 0,
    emitter_size: 0.5,

    render_shaders: true,
    multi_color: true,

    render_bloom: true,
    bloom_iterations: 8,
    bloom_resolution: 256,
    intensity: 0.8,
    threshold: 0.6,
    soft_knee: 0.7,

    background_color: { r: 15, g: 15, b: 15 },
    transparent: false
});

