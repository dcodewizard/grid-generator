<template>
  <div class="main-container">
    <h1 class="page-title">Grid Generator</h1>
    <div class="input-container">
      <div style="width:-webkit-fill-available;">
        <span>Generate</span>
        <input
          v-model="numGrids"
          type="number"
          id="numGrids"
          :max="5"
          :min="0"
          class="input-field"
          
        />
  
        <span> random grids, each with </span>
        <input
          v-model="numRowsCols"
          type="number"
          id="numRowsCols"
          :max="5"
          :min="0"
          class="input-field"
        />
        <span>rows/columns</span>
      </div>
      <button
        @click="generateGrids"
        :disabled="!isValidInput"
        class="generate-button"
      >
        Generate
      </button>
    </div>

    <div class="grid-container">
      <div v-for="(grid, gridIndex) in grids" :key="gridIndex" class="grid">
        <div class="row" v-for="(row, rowIndex) in grid" :key="rowIndex">
          <div class="column" v-for="(letter, colIndex) in row" :key="colIndex">
            {{ letter }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GridModel from "./GridModel";

export default {
  data() {
    return {
      numGrids: 0,
      numRowsCols: 0,
      grids: [],
    };
  },
  computed: {
    isValidInput() {
      return (
        this.numGrids > 0 &&
        this.numGrids < 6 &&
        this.numRowsCols > 0 &&
        this.numRowsCols < 6
      );
    },
  },
  methods: {
    generateGrids() {
      if (this.isValidInput) {
        this.grids = GridModel.generateGrids(this.numGrids, this.numRowsCols);
      }
    },
  },
};
</script>
