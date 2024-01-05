import { NutrientType, EssentialAminoAcids, PersonAgeClass } from './enums'

declare global {
  type BaseRecord<TId> = {
    id: TId
  }

  type Food = BaseRecord<number> & {
    description: string
  }

  type FoodWithNutrientsRaw = Food & {
    food_nutrient: [
      {
        nutrient_id: number
        amount: number
      }

    ]
  }

  type FoodNutrients = {
    [key in NutrientType]?: number
  }
  type FoodWithNutrients = Food & {
    nutrients: FoodNutrients
  }

  type AnalyzedFood = FoodWithNutrients & {aminoProfile: AminoProfileAnalysis}

  type Recipe = BaseRecord<number> & {
    title: string
    nutrientTargets: NutrientTarget[]
    items: RecipeItem[]
  }

  type RecipeItem = {
    food: AnalyzedFood
    amount: number // in grams
  }

  type AminoAcidProfile =
    // Value is % of total protein
    ({ name: string, acids: EssentialAminoAcids[], amount: number })[]

  type AminoProfileAnalysis = {
    profile: AminoAcidProfile
    scoredProfile: AminoAcidProfile
    score: number
  }

  type NutrientTargetDirection = 'min' | 'max'
  type NutrientTarget = {
    nutrient: NutrientType
    amount?: number
    direction?: NutrientTargetDirection
  }
  type NutritionTargetProfile = {
    ageClass: PersonAgeClass,
    nutrientTargets: NutrientTarget[]
  }
}

