const reg = require("UnitReg");
const SuiGroundT1 = extendContent(UnitType, "nimbie", {
});
SuiGroundT1.constructor = () => extend(UnitEntity, {
	update(){
		this.super$update();
		if (this.dead || this.health <= 0){
			this.destroy();
		}
	},

	classId: () => SuiGroundT1.classId
});
register(SuiGroundT1);
//SuiAirT1.ammoType = AmmoTypes.;
Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(SuiGroundT1, 60 * 5, ItemStack.with(Items.silicon, 30, Items.titanium, 20)));
print("Registered nimble.");