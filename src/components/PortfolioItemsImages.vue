<!-- <template>
  <div
    class="h-screen w-3/4 pt-[84px] bg-orange-500 items-center px-5 flex justify-center"
  >
    <div
      class="xl:w-5/5 xl:h-3/4 bg-cover border-8 xl:border-[10px] border-white rounded-[20px]"
    >
      <BaseImages
        class="w-4/4 h-full bg-cover rounded-[8px]"
        :name="`${label}.jpg`"
      />
    </div>
  </div>
</template> -->
<script>
import BaseImages from "./BaseImages.vue";

export default {
  props: {
    label: String,
  },
  components: {
    BaseImages,
  },
};
</script>
