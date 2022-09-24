namespace AdmiralNelsonLordPack {
    export type AgentKeyToCount = LuaMap<string, number>

    export class LordPool {
        private FactionKey = ""
        private LordAgentSubtypeToCount : AgentKeyToCount = new LuaMap<string, number>

        constructor(factionkey?: string, agentSubtypes?: Array<string>){
            this.FactionKey = factionkey ?? "";

            if(agentSubtypes == null) return;
            agentSubtypes.forEach(agent => {
                this.LordAgentSubtypeToCount.set(agent, 0)
            })
        }

        IncrementAgentCount(agentkey: string): void {
            if (this.LordAgentSubtypeToCount.has(agentkey)) {
                const val =  this.LordAgentSubtypeToCount.get(agentkey) ?? -1
                this.LordAgentSubtypeToCount.set(agentkey, val + 1)
            }
        }
        
        DecrementAgentCount(agentkey: string): void {
            if (this.LordAgentSubtypeToCount.has(agentkey)) {
                const val =  this.LordAgentSubtypeToCount.get(agentkey) ?? 1
                this.LordAgentSubtypeToCount.set(agentkey, val - 1)
            }
        }

        public get AgentKeysToCounts() : ReadonlyLuaMap<string, number> {
            return this.LordAgentSubtypeToCount
        }

        public get Faction(): string {
            return this.FactionKey;
        }
        
    }
}