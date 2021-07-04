<template>
  <div class="subtotal">
    <p>
      Subtotal ({{ basket?.length }} items): <strong>{{ value }}</strong>
    </p>
    <small className="subtotal__gift">
      <input type="checkbox" /> This order contains a gift
    </small>
    <button>Proceed to Checkout</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["basket"]),
  },
  methods: {
    ...mapMutations(["GET_BASKET_TOTAL"]),
  },
};
</script>

<style scoped>
.subtotal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 120px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
  position: absolute;
  right: 10px;
  top: 60px;
}

.subtotal__gift {
  display: flex;
  align-items: center;
}

.subtotal__gift > input {
  margin-right: 5px;
}

.subtotal > button {
  background: #133c55;
  border-radius: 2px;
  width: 100%;
  height: 35px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #133c55;
  color: #fff;
}
</style>
