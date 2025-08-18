import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vanillaProgression, allModdedProgression } from '../data/progression.data';
import { WeaponSelectorStateService } from '../weapon-selector-state.service';

@Component({
  selector: 'app-progression-changer',
  imports: [CommonModule],
  templateUrl: './progression-changer.component.html',
  styleUrl: './progression-changer.component.css'
})
export class ProgressionChangerComponent {
  currentProgression:{step: string, after?: string}[] = [];

  constructor(private selectorState: WeaponSelectorStateService) {
  }
  
  ngOnInit(): void {
    const tempPorgression = this.selectorState.progression;

    if(this.selectorState.arrayEquals(tempPorgression, this.currentProgression)){
      this.updateCombinedProgression();
    } else{
      this.currentProgression = this.selectorState.progression;
    }
  }

  updateCombinedProgression() {
    const allModProgressionsArrays = allModdedProgression
    .filter(c => this.selectorState.availableContent.find(all => all.label === c.label)?.active)
    .map(prog =>
      prog.progression.map(p => ({
        step: p.step.toString(),
        after: p.after.toString(),
      }))
    );

    const baseVanilla = vanillaProgression.map(p => ({ step: p.step.toString()}));

    this.currentProgression = this.insertModSteps(baseVanilla, allModProgressionsArrays);
    
    console.log('Combined progression:', this.currentProgression);
  }

  // direct copy from weapon selector component
  insertModSteps(
    base: { step: string }[],
    mods: { step: string; after: string }[][]
  ): { step: string }[] {
    const final = [...base];

    for (const mod of mods) {
      for (const modStep of mod) {
        const index = final.findIndex((element) => element.step === modStep.after);
        if (index !== -1) {
          final.splice(index + 1, 0, { step: modStep.step });
        }
      }
    }

    return final;
  }

  getProgressionIndex(progression:{step: string, after?: string}):number{
    return this.currentProgression.findIndex(prog => prog.step === progression.step);
  }

  changeIndex(newIndex:string, progression:{step: string, after?: string}){
    let index = Number(newIndex) - 1;

    if(index < 0 || index >= this.currentProgression.length) return;

    const oldIndex = this.currentProgression.findIndex(prog => prog.step === progression.step);
    this.currentProgression.splice(oldIndex, 1);

    this.currentProgression.splice(index, 0, progression);

    this.selectorState.progression = this.currentProgression;
  }

  restoreToDefaultProgression(){
    this.updateCombinedProgression();
    this.selectorState.progression = this.currentProgression;
  }
}
