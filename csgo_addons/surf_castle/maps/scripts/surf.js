import { Instance } from "cs_script/point_script";

Instance.OnScriptInput("boost_up", (trigger) => {
    const player = trigger.activator;

    if (player) {
        const velocity = player.GetAbsVelocity();
        velocity.z += 1000;
        player.Teleport({ velocity });
    }
});

Instance.OnScriptInput("boost_500", (trigger) => {
    handleBoost(trigger.activator, 500);
});

Instance.OnScriptInput("boost_700", (trigger) => {
    handleBoost(trigger.activator, 700);
});

Instance.OnScriptInput("boost_800", (trigger) => {
    handleBoost(trigger.activator, 800);
});

Instance.OnScriptInput("boost_1000", (trigger) => {
    handleBoost(trigger.activator, 1000);
});

Instance.OnScriptInput("boost_1250", (trigger) => {
    handleBoost(trigger.activator, 1250);
});

Instance.OnScriptInput("boost_1500", (trigger) => { 
    handleBoost(trigger.activator, 1500);
});


function handleBoost(player, vel_add) {
    const velocity = player.GetAbsVelocity();
    let x = velocity.x;
    let y = velocity.y;

    if (Math.abs(x) > Math.abs(y)) {
        if (x > 0) {
            velocity.x += vel_add;
        } else {
            velocity.x -= vel_add;
        }
    } else {
        if (y > 0) {
            velocity.y += vel_add;
        } else {
            velocity.y -= vel_add;
        }
    }

    player.Teleport({ velocity });
}
